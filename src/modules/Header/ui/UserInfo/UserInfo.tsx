const UserInfo = () => {
  return <div>UserInfo</div>;
};
export default UserInfo;

// import { Avatar, Flex, Title } from '@mantine/core';
// import { useSelector } from 'react-redux';

// import Marquee from '@/components/Marquee';

// import ThemeToggler from './ThemeToggler';

// import { selectUserData } from '@/redux/slices/authSlice';

// import css from '../styles/UserInfo.module.css';
// import { Link } from 'react-router-dom';

// function UserInfo() {
//   const { username = 'User', avatarURL } = useSelector(selectUserData) ?? {};

//   return (
//     <Flex gap={{ base: 8, md: 14 }} align="center">
//       <ThemeToggler />

//       <Marquee
//         className={css.username}
//         component={Title}
//         width="80px"
//         breakpoint="md"
//         order={3}
//       >
//         {username}
//       </Marquee>

//       <Link to="/account">
//         <Avatar className={css.avatar} variant="outline" src={avatarURL}>
//           {username[0].toUpperCase()}
//         </Avatar>
//       </Link>
//     </Flex>
//   );
// }

// export default UserInfo;
