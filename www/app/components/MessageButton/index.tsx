import whatsappIcon from "../../assets/icons/whatsApp.png";
const MessageButton = () => {
  return (
    <a href="#" className="float">
      <img src={whatsappIcon} className="my-float" height={'40px'} width={'40px'}/>
    </a>       
  )
};
export default MessageButton;