export type Vector = number[];

export type Embedding = {
  slug: string;
  embedding: Vector;
};

export type Score = {
  embedding: Embedding;
  score: number;
};

export function cosineSimilarity(a: Vector, b: Vector): number {
  const dotProduct = a.reduce((acc, val, i) => acc + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((acc, val) => acc + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((acc, val) => acc + val * val, 0));

  return dotProduct / (magnitudeA * magnitudeB);
}

export function findSimilarEmbeddings(query: Vector, embeddings: Embedding[], topK: number): Score[] {
  const scores: Score[] = embeddings.map((embedding) => ({
    embedding,
    score: cosineSimilarity(query, embedding.embedding),
  }));

  scores.sort((a, b) => b.score - a.score);

  return scores.slice(0, topK);
}
