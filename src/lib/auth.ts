export interface User {
  id: string;
  email: string;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  createdAt: string;
}

export interface RegisterInput {
  email: string;
  password: string;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

export interface LoginInput {
  email: string;
  password: string;
}

const USERS_KEY = "blossom_users";
const CURRENT_USER_KEY = "blossom_current_user";

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const hashPassword = (password: string): string => {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16) + password.length.toString(16);
};

export const getUsers = (): Array<User & { passwordHash: string }> => {
  const stored = localStorage.getItem(USERS_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveUsers = (users: Array<User & { passwordHash: string }>): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const register = (input: RegisterInput): User => {
  const users = getUsers();
  
  if (users.find(u => u.email === input.email)) {
    throw new Error("Email already registered");
  }
  
  const newUser: User = {
    id: generateId(),
    email: input.email,
    name: input.name,
    address: input.address,
    createdAt: new Date().toISOString(),
  };
  
  users.push({
    ...newUser,
    passwordHash: hashPassword(input.password),
  });
  
  saveUsers(users);
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
  
  return newUser;
};

export const login = (input: LoginInput): User => {
  const users = getUsers();
  const user = users.find(u => u.email === input.email);
  
  if (!user) {
    throw new Error("Invalid email or password");
  }
  
  const passwordHash = hashPassword(input.password);
  if (user.passwordHash !== passwordHash) {
    throw new Error("Invalid email or password");
  }
  
  const { passwordHash: _, ...userWithoutPassword } = user;
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
  
  return userWithoutPassword;
};

export const logout = (): void => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const getCurrentUser = (): User | null => {
  const stored = localStorage.getItem(CURRENT_USER_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const updateUser = (updates: Partial<User>): User => {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    throw new Error("No user logged in");
  }
  
  const updatedUser = { ...currentUser, ...updates };
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));
  
  const users = getUsers();
  const userIndex = users.findIndex(u => u.id === currentUser.id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    saveUsers(users);
  }
  
  return updatedUser;
};