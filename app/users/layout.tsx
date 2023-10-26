import Sidebar from '../components/sidebar/Sidebar';
import getUsers from '../actions/getUsers';

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}
