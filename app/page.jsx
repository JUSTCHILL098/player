"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function Page() {
  const [ep, setEp] = useState("")
  const [lang, setLang] = useState("sub")
  const [url, setUrl] = useState("")

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-8">

      <div className="text-center space-y-2">
        <Badge>Documentation</Badge>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
          Hianime Video API
        </h1>
        <p className="text-zinc-400">
          One-step anime embed solution
        </p>
      </div>

      <Alert>
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>
          Direct access is blocked. Embed only.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Endpoint</CardTitle>
        </CardHeader>
        <CardContent>
          <code className="bg-zinc-900 px-2 py-1 rounded">
            https://megaplay.buzz/stream/s-2/{`{ep-id}`}/{`{language}`}
          </code>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Test Embed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Episode ID"
            value={ep}
            onChange={e => setEp(e.target.value)}
          />

          <Select value={lang} onValueChange={setLang}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sub">Sub</SelectItem>
              <SelectItem value="dub">Dub</SelectItem>
            </SelectContent>
          </Select>

          <Button
            className="w-full"
            onClick={() => setUrl(`https://megaplay.buzz/stream/s-2/${ep}/${lang}`)}
          >
            Generate
          </Button>

          {url && (
            <>
              <pre className="bg-zinc-900 p-3 rounded text-xs overflow-auto">
{`<iframe src="${url}" width="100%" height="100%" allowfullscreen></iframe>`}
              </pre>

              <div className="aspect-video rounded overflow-hidden border">
                <iframe src={url} className="w-full h-full" allowFullScreen />
              </div>
            </>
          )}
        </CardContent>
      </Card>

    </main>
  )
}
