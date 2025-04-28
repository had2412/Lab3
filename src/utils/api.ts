// Fake API Data

export const fetchContacts = async () => {
  const fakeContacts = Array.from({ length: 30 }, (_, i) => ({
    id: `id-${i}`,
    name: `Contact ${i}`,
    avatar: `https://i.pravatar.cc/150?img=${i}`,
    phone: `123-456-789${i}`,
    cell: `987-654-321${i}`,
    email: `contact${i}@example.com`,
    favorite: Math.random() < 0.3,
  }));
  return fakeContacts;
};

export const fetchUserContact = async () => {
  return {
    id: 'user-1',
    name: 'User Example',
    avatar: 'https://i.pravatar.cc/150?img=50',
    phone: '111-222-3333',
    cell: '999-888-7777',
    email: 'user@example.com',
    favorite: true,
  };
};

export const fetchRandomContact = async () => {
  return {
    id: 'random-1',
    name: 'Random Example',
    avatar: 'https://i.pravatar.cc/150?img=60',
    phone: '555-666-7777',
    cell: '444-555-6666',
    email: 'random@example.com',
    favorite: false,
  };
};
