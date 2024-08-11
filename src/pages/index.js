import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeropageFeatures from "@site/src/components/HeropageFeatures";
// import RequestForm from "@site/src/components/Request";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home `}>
      <main>
        <HeropageFeatures />
        {/* <RequestForm /> */}
      </main>
    </Layout>
  );
}
