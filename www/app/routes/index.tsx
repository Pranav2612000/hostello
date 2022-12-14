import { LoaderFunction } from 'remix'
import { useLoaderData } from '@remix-run/react'
import { ActionFunction, json } from '@remix-run/node'
import { useAuth } from '@clerk/remix'
import { getAuth } from '@clerk/remix/ssr.server'
import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    Heading,
    Link as ChakraLink,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { getDB } from 'utils'
import ZeroSlider from '~/components/ZeroSlider/ZeroSlider'
import Header from '~/components/Header/Header'
import HostelsList from '~/components/HostelsList/HostelsList'
import MessageButton from '~/components/MessageButton'

const dbErrorMessage =
    'Something is missing.<br/>Did you set up Supabase yet?<br/>You can find the <a href="https://github.com/clerkinc/remix-bossa-nova-stack#configuring-the-database" target="_blank">instructions in the README file</a>.'

export const loader: LoaderFunction = async ({ request }) => {
    const { userId } = await getAuth(request)
    if (!userId) return null

    const db = await getDB(request)
    if (!db) {
        return json({ error: dbErrorMessage })
    }

    const { data } = await db.from('songs').select()

    if (!data) {
        return json({ error: dbErrorMessage })
    }

    return json({ songs: data })
}

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()
    const { userId } = await getAuth(request)

    const song = formData.get('add-song')

    const db = await getDB(request)
    if (!db) return null

    await db.from('songs').insert({ body: song, user_id: userId })
    return null
}

export default function Index() {
    const { signOut } = useAuth()
    const data = useLoaderData()
    const headingSize = useBreakpointValue({ base: 'lg', sm: '2xl', lg: '4xl' })

    return (
        <>
            <Stack
                justify='center'
                textAlign='center'
                flex={1}
                color='white'
                gap={20}
            >
                <ZeroSlider/>
                <HostelsList/>
            </Stack>
            <MessageButton/>
        </>
    )
}
