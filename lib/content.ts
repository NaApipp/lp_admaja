import { ContentResponse } from "@/app/types/content";

const CONTENT_API_URL = "https://admin.admajaskanifo.org/api/content";
// const BASE_URL = "http://localhost:3000/api/content";

export async function getContent(): Promise<ContentResponse> {
  const res = await fetch(`${CONTENT_API_URL}`, {
    // ISR: revalidate tiap 60 detik, sesuaikan kebutuhan
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Gagal fetch berita: ${res.status}`);
  }

  return res.json();
}
