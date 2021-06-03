import Link from "next/link";
import Layout from "../components/Layout";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableDataCell,
} from "@dfds-ui/react-components";
import useSWR from "swr";
import { fetcher } from "../utils";

import { theme } from '@dfds-ui/theme'
import styled from '@emotion/styled'

export const StyledTableHeaderCell = styled(TableHeaderCell)`
  background: white;
  box-sizing: border-box;
  border-bottom: 1px solid ${theme.colors.divider.dark};
  height: 50px;
  min-width: initial;
  z-index: 200;
`
export const StyledTableDataCell = styled(TableDataCell)`
  border-bottom: 1px solid ${theme.colors.divider.dark};
  cursor: pointer;
  height: 50px;
  line-height: 1;
  min-width: initial;
  padding: 0 0 0 0.75rem;
  white-space: nowrap;
  z-index: 200;
`


const TableDemoPage = () => {
  const { data, error } = useSWR<any>(
    "https://rickandmortyapi.com/api/location",
    fetcher
  );
  const isLoading = !data && !error;

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <Table isInteractive isHeaderSticky>
          <TableHead>
            <TableRow>
              <StyledTableHeaderCell>Name</StyledTableHeaderCell>
              <StyledTableHeaderCell>Type</StyledTableHeaderCell>
              <StyledTableHeaderCell>Date</StyledTableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.results.map((episode: any) => (
              <TableRow key={episode.id}>
                <StyledTableDataCell>{episode.name}</StyledTableDataCell>
                <StyledTableDataCell>{episode.type}</StyledTableDataCell>
                <StyledTableDataCell>{episode.created}</StyledTableDataCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default TableDemoPage;
