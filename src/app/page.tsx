"use client";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import type { BookResponse, Book } from "../types/book";
import Link from "next/link";

export default function Home() {
  const [booksData, setBooksData] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/api/books");
    if (response.ok) {
      const data = await response.json();
      const resData: BookResponse = data;
      setBooksData(resData.books);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        Books Application
      </Typography>

      {isLoading && <Typography>Loading...</Typography>}

      {booksData.map((book) => (
        <Link href={`/book/${book._id}`} key={book._id}>
          <Typography variant="h6">{book.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {book.author}
          </Typography>
        </Link>
      ))}
    </Container>
  );
}
