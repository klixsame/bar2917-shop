import CookieConsent from "react-cookie-consent";

const CookieAlert = () => {
    return (
        <div>
            <CookieConsent debug={true}>This site uses cookies.</CookieConsent>
        </div>
    )
}

export default CookieAlert