'use client'

import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [command, setCommand] = useState('')
  const [result, setResult] = useState('')

  const sendCommand = async () => {
    const res = await axios.post('http://localhost:8000/command', {
      command
    })

    setResult(JSON.stringify(res.data, null, 2))
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>AI 智能家居 Agent</h1>

      <input
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="例如：打开客厅灯"
      />

      <button onClick={sendCommand}>
        发送
      </button>

      <pre>{result}</pre>
    </div>
  )
}
