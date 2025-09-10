"use client";
import { Book } from "@/types/book";
import { Container, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/books/${id}`);
      if (response.ok) {
        const data = await response.json();
        setBook(data.book);
      }
    };
    if (id !== undefined) {
      fetchData();
    }
  }, [id]);

  if (!book) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography>Loading book details...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4">{book.title}</Typography>
      <Typography variant="h6">Author: {book.author}</Typography>
      <Typography>Description: {book.description}</Typography>
      <Typography>Genre: {book.genre}</Typography>
      <Typography>Year: {book.year}</Typography>
      <Typography>Price: {book.price}</Typography>
      <Typography>
        Available: {book.available ? "Yes" : "No"}
      </Typography>
      <Typography>
        Added by: {book.addedBy.username} ({book.addedBy.email})
      </Typography>
      <Typography>Created at: {book.createdAt}</Typography>
      <Typography>Updated at: {book.updatedAt}</Typography>
    </Container>
  );
}
