import Container from "@/components/Container";

export const metadata = {
    title: 'Privacy Policy App - Protecting Your Data Privacy',
    description: 'Explore our Privacy Policy app, designed to help you understand and protect your data privacy rights. With our app, you can easily generate legally compliant privacy policies tailored to your website or app. Our comprehensive tool ensures that your privacy policy meets regulatory requirements and covers essential aspects such as data collection, usage, storage, and security practices. Safeguard your users\' information and build trust by implementing a transparent and user-friendly privacy policy. Stay compliant with GDPR, CCPA, and other data protection laws with our Privacy Policy app. Start creating your privacy policy today!',
    keywords: [
        'Privacy Policy App', 'Data Privacy', 'Privacy Policy Generator', 'Privacy Policy Compliance', 'GDPR Compliance',
        'CCPA Compliance', 'Data Protection Laws', 'Privacy Policy Template', 'Website Privacy Policy', 'App Privacy Policy',
        'Data Collection', 'Data Usage', 'Data Storage', 'Data Security', 'User Privacy', 'Privacy Policy for Website',
        'Privacy Policy for App', 'Privacy Policy Requirements', 'Privacy Policy Legislation', 'Privacy Policy Generator Tool'
    ],
    author: 'Santosh Raut',
    ogTitle: 'Privacy Policy App - Protecting Your Data Privacy',
    ogDescription: 'Explore our Privacy Policy app, designed to help you understand and protect your data privacy rights. With our app, you can easily generate legally compliant privacy policies tailored to your website or app. Our comprehensive tool ensures that your privacy policy meets regulatory requirements and covers essential aspects such as data collection, usage, storage, and security practices. Safeguard your users\' information and build trust by implementing a transparent and user-friendly privacy policy. Stay compliant with GDPR, CCPA, and other data protection laws with our Privacy Policy app. Start creating your privacy policy today!'
};

export default function Page({children}){
    return (
        <div className="flex flex-col items-center justify-center pt-24">
            <Container>
            {children}
            </Container>
        </div>
    )
}