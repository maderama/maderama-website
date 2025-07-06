// // MacDock.jsx
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import finderIcon from "../../../assets/icons/finder.png";
// import messagesIcon from "../../../assets/icons/messages.png";
// import spotifyIcon from "../../../assets/icons/spotify.png";
// import binIcon from "../../../assets/icons/bin.png";
// import notionIcon from "../../../assets/icons/notion.png";

// const DockContainer = styled.div`
//   position: fixed;
//   bottom: 1rem;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 1.5rem;
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   padding: 0.75rem 1.5rem;
//   border-radius: 20px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
//   z-index: 999;
// `;

// const AppIcon = styled(motion.img)`
//   width: 48px;
//   height: 48px;
//   border-radius: 10px;
//   cursor: pointer;
//   user-select: none;
// `;

// const apps = [
//   { name: "Finder", icon: finderIcon },
//   { name: "Chrome", icon: messagesIcon },
//   { name: "Spotify", icon: spotifyIcon },
//   { name: "VSCode", icon: binIcon },
//   { name: "Notion", icon: notionIcon },
// ];

// export default function MacDock() {
//   return (
//     <DockContainer>
//       {apps.map(app => (
//         <AppIcon
//           key={app.name}
//           src={app.icon}
//           alt={app.name}
//           whileHover={{
//             scale: 1.4,
//             y: -10,
//             transition: { type: "spring", stiffness: 300, damping: 10 }
//           }}
//           whileTap={{ scale: 1.2 }}
//           drag={false}
//         />
//       ))}
//     </DockContainer>
//   );
// }
