const canManage = (accessRoles: string[], userRoles: string[] = []) => {
  return accessRoles.some((accessRole: string) =>
    userRoles.includes(accessRole),
  );
};

export default canManage;
