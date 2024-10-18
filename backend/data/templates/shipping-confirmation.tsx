import { Heading, Section } from "@react-email/components";
import EmailBody from "./components/email-body";
import Layout from "./components/layout";
import { Title } from "./components/style";

export default function BuyAgain() {
  return (
    <Layout preview="Shipping confirmation">
      <Section className="w-full max-w-[525px] px-5 my-20" align="left">
        <Heading className="mb-3" style={Title}>
          Your order is on its way!
        </Heading>
        <EmailBody
          paragraphs={[
            "Great news! Your order [Order Number] has been shipped and is on its way to you.",
            "If you have any questions about your delivery, please don't hesitate to contact us at [Customer Support Email] or [Customer Support Phone Number]. We're always happy to assist!",
            "We hope you're as excited as we are for your purchase to arrive. Thank you for shopping with Munchies!",
          ]}
          signature
        />
      </Section>
    </Layout>
  );
}