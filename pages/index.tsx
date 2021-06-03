import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example + DFDS Shared UI">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/tabledemo">
        <a>Table demo</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
