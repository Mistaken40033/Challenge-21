import { useQuery, useMutation } from '@apollo/client';
import { GET_ME, SEARCH_GOOGLE_BOOKS } from './queries';
import { LOGIN_USER, CREATE_USER, SAVE_BOOK, DELETE_BOOK } from './mutations';

// Get logged-in user's info
export const useGetMe = () => {
  const { loading, error, data } = useQuery(GET_ME);
  return { loading, error, data };
};

// Create a new user
export const useCreateUser = () => {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  return { createUser, data, loading, error };
};

// Login user
export const useLoginUser = () => {
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  return { loginUser, data, loading, error };
};

// Save book data for a logged-in user
export const useSaveBook = () => {
  const [saveBook, { data, loading, error }] = useMutation(SAVE_BOOK);
  return { saveBook, data, loading, error };
};

// Remove saved book data for a logged-in user
export const useDeleteBook = () => {
  const [deleteBook, { data, loading, error }] = useMutation(DELETE_BOOK);
  return { deleteBook, data, loading, error };
};

// Search Google Books API
export const useSearchGoogleBooks = (query) => {
  const { loading, error, data } = useQuery(SEARCH_GOOGLE_BOOKS, {
    variables: { query },
  });
  return { loading, error, data };
};
