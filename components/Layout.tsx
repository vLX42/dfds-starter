import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "@emotion/styled";
import { AppBar, AppBarProvider, AppBarItem } from "@dfds-ui/react-components";

type Props = {
  children?: ReactNode;
  title?: string;
};

const StyledAppBar = styled(AppBar)`
  button {
    display: none;
  }
  && {
    height: auto;
    padding-bottom: 10px;
  }
`;

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <AppBarProvider>
      <StyledAppBar>
        <Link href="/">
          <a>
            <AppBarItem title="Home" id="home" />
          </a>
        </Link>

        <Link href="/tabledemo">
          <a>
            <AppBarItem title="Table demo" id="tableDemo" />
          </a>
        </Link>

        <Link href="/form">
          <a>
            <AppBarItem title="Form demo" id="formDemo" />
          </a>
        </Link>
        
        <Link href="/users">
          <a>
            <AppBarItem title="User list" id="userList" />
          </a>
        </Link>
      </StyledAppBar>
    </AppBarProvider>

    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
