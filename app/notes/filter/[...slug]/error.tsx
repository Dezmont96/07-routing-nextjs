'use client';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

interface FilteredNotesErrorProps {
  error: Error;
  reset: () => void;
}

export default function FilteredNotesError({ error }: FilteredNotesErrorProps) {
  return (
    <ErrorMessage>
      Could not fetch the list of notes for this category. <br />
      <em>{error.message}</em>
    </ErrorMessage>
  );
}