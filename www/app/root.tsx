import React from 'react'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'
import { LoaderFunction } from '@remix-run/node'
import { rootAuthLoader } from '@clerk/remix/ssr.server'
import { ClerkApp, ClerkCatchBoundary } from '@clerk/remix'
import { Box, ChakraProvider, Image } from '@chakra-ui/react'
import { withEmotionCache } from '@emotion/react'
import { theme } from 'theme'
import { ServerStyleContext, ClientStyleContext } from './context'
import 'focus-visible' // Remove Chakra's outline caused by clicks
import Header from './components/Header/Header'
import styles from "./styles/index.css";

export const loader: LoaderFunction = args => rootAuthLoader(args)
export const CatchBoundary = ClerkCatchBoundary()

const ourTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        hostelloRed: {
            300: '#ee7779',
            500: '#e32226',
            600: '#ac1518',
            700: '#841012'
        }
    }
}

{/*
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/animate.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
*/}
export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {/*
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/animate.min.css" },
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" },
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-icons.css" },
    */}
    //{ rel: "stylesheet", href: "assets/vendor/swiper/swiper-bundle.min.css" },
  ];
}

function App() {
    return (
        <Document>
            <ChakraProvider theme={ourTheme}>
                <Header/>
                <Box as='main' minH='100vh' pos='relative'>
                    <Outlet />
                </Box>
            </ChakraProvider>
        </Document>
    )
}

export default ClerkApp(App)

interface DocumentProps {
    children: React.ReactNode
}

const Document = withEmotionCache(
    ({ children }: DocumentProps, emotionCache) => {
        const serverSyleData = React.useContext(ServerStyleContext)
        const clientStyleData = React.useContext(ClientStyleContext)

        // Only executed on client
        React.useEffect(() => {
            // Re-link sheet container
            emotionCache.sheet.container = document.head
            // Re-inject tags
            const tags = emotionCache.sheet.tags
            emotionCache.sheet.flush()
            tags.forEach(tag => {
                ;(emotionCache.sheet as any)._insertTag(tag)
            })
            // Reset cache to reapply global styles
            clientStyleData?.reset()
        }, [])

        return (
            <html lang='en'>
                <head>
                    <title>Bossa Nova Stack</title>
                    <meta charSet='utf-8' />
                    <meta
                        name='viewport'
                        content='width=device-width,initial-scale=1'
                    />
                    <Meta />
                    <Links />
                    {serverSyleData?.map(({ key, ids, css }) => (
                        <style
                            key={key}
                            data-emotion={`${key} ${ids.join(' ')}`}
                            dangerouslySetInnerHTML={{ __html: css }}
                        />
                    ))}
                </head>

                <body>
                    {children}
                    <ScrollRestoration />
                    <Scripts />
                    {process.env.NODE_ENV === 'development' ? (
                        <LiveReload />
                    ) : null}
                </body>
            </html>
        )
    },
)
