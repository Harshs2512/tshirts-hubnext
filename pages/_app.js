import "@/styles/globals.css";
import { useRouter } from "next/router";
import DefaultLayout from "@/layouts/marketing/DefaultLayout";
import DashboardIndex from "@/layouts/admin/DashboardIndex";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const Layout = Component.Layout || (router.pathname.includes('admin') ?  DashboardIndex : DefaultLayout);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
