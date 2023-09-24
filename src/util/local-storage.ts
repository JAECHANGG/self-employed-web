enum LocalStorageKey {
  UserId = "userId",
}

export const setLocalStorageUserId = (userId: string) => {
  localStorage.setItem(LocalStorageKey.UserId, userId);
};

export const getLocalStorageUserId = (): string | null => {
  return localStorage.getItem(LocalStorageKey.UserId);
};

export const removeLocalStorageUserId = () => {
  localStorage.removeItem(LocalStorageKey.UserId);
};
