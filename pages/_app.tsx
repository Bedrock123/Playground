import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, ButtonStylesParams } from "@mantine/core";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], preload: true });

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: inter.style.fontFamily,
          headings: { fontFamily: inter.style.fontFamily },
          colorScheme: "light",
          activeStyles: {
            filter: "brightness(95%)",
            transform: "translateY(0px)",
          },
          components: {
            Button: {
              // https://mantine.dev/styles/styles-api/
              styles: (theme, params: ButtonStylesParams) => ({
                root: {
                  fontWeight: 400,
                  transition: "all 200ms ease",
                },
              }),
              defaultProps: {
                size: "sm",
              },
            },
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
