// app/_not-found/page.jsx
"use client"

import { useState } from "react"

export default function NotFound() {
  const [ep, setEp] = useState("")
  const [lang, setLang] = useState("sub")
  const [url, setUrl] = useState("")

  return (
    <main style={{ maxWidth: 800, margin: "40px auto", padding: 20 }}>
      <h1 style={{ fontSize: 48, textAlign: "center", marginBottom: 20 }}>
        404 — Page Not Found
      </h1>
      <p style={{ textAlign: "center", marginBottom: 40 }}>
        Looks like this page doesn’t exist. But you can embed anime videos below!
      </p>

      <div style={{ marginBottom: 10 }}>
        <input
          placeholder="Episode ID (e.g. 136197)"
          value={ep}
          onChange={e => setEp(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />

        <select
          value={lang}
          onChange={e => setLang(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        >
          <option value="sub">Sub</option>
          <option value="dub">Dub</option>
        </select>

        <button
          style={{ width: "100%", padding: 12 }}
          onClick={() => {
            if (!ep) return alert("Please enter an episode ID!");
            setUrl(`https://megaplay.buzz/stream/s-2/${ep}/${lang}`);
          }}
        >
          Generate Embed
        </button>
      </div>

      {url && (
        <>
          <pre style={{ marginTop: 20, background: "#f0f0f0", padding: 10 }}>
{`<iframe src="${url}" width="100%" height="100%" allowfullscreen></iframe>`}
          </pre>

          <div
            style={{
              marginTop: 20,
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
            }}
          >
            <iframe
              src={url}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              allowFullScreen
            />
          </div>
        </>
      )}
    </main>
  )
}
