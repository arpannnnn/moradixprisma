import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssuesPage = () => {
  return (
    <div className=''><Button>
   <Link href="/newIssue">Issue 1</Link>
  </Button></div>
  )
}

export default IssuesPage