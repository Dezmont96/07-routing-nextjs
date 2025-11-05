// app/notes/filter/[...slug]/error.tsx
'use client';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

export default function FilteredNotesError({ error }: { error: Error }) {
  return (
    <ErrorMessage>
      Could not load data for this category. <br />
      <em>{error.message}</em>
    </ErrorMessage>
  );
}