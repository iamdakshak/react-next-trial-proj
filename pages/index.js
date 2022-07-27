import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import UserLayout from "./UserLayout/UserLayout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am an entrepreneur with specialization in FinTech and problem
          solving.
        </p>
        <div>
          <p>Link to my NextJS app</p>
          <Link href="/UserLayout/UserLayout">
            <a>click here</a>
          </Link>
          {/* <UserLayout /> */}
        </div>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
