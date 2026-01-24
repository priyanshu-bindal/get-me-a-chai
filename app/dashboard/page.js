"use client"
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";



const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter();

  // Redirect to login if no session. Do navigation inside useEffect
  // to avoid updating Router during render.
  useEffect(() => {
    if (!session) {
      router.push(`/login`)
    }
  }, [session, router])

  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard
