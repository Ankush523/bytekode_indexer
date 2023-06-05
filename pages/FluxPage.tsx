// import React, { useState } from "react";
// import Image from "next/image";
// import flux from "../images/flux.png";
// import bytekodeLogo from "../images/bytekode.jpg";
// import {
//   Box,
//   Button,
//   Input,
//   Select,
//   Flex,
//   Heading,
//   Text,
//   Code,
//   IconButton,
//   extendTheme,
//   CSSReset,
//   useColorMode,
//   ColorModeProvider,
//   Divider,
//   Center,
//   FormControl,
//   FormLabel,
//   Icon,
// } from "@chakra-ui/react";
// import { ThemeProvider } from "@chakra-ui/react";
// import { FaHeart, FaMoon, FaSun } from "react-icons/fa";
// import axios from "axios";

// const customTheme = extendTheme({
//   colors: {
//     brand: {
//       900: "#24272A",
//       100: "#f7fafc",
//       200: "#6F4CFF",
//     },
//   },
//   styles: {
//     global: {
//       h2: {
//         fontWeight: "semibold",
//       },
//     },
//   },
// });

// const chainOptions = [
//   { value: "mumbai", label: "Mumbai" },
//   { value: "eth_mainnet", label: "ETH Mainnet" },
//   { value: "polygon", label: "Polygon" },
//   { value: "eth_goerli", label: "ETH Goerli" },
//   // Add more options as needed
// ];

// const FluxPage: React.FC = () => {
//   const [txnHash, setTxnHash] = useState("");
//   const [txnChain, setTxnChain] = useState("");
//   const [apiOutput, setApiOutput] = useState<any>(null);
//   const [smartContract, setSmartContract] = useState("");
//   const { colorMode, toggleColorMode } = useColorMode();

//   const handleButtonClick = async () => {
//     const response = await axios.post(
//       "https://flux-dev.onrender.com/transaction/",
//       {
//         txnHash,
//         txnChain,
//       }
//     );

//     setApiOutput(response.data);
//   };

//   return (
//     <ThemeProvider theme={customTheme}>
//       <CSSReset />
//       <ColorModeProvider>
//         <Flex
//           direction="column"
//           minH="100vh"
//           minW="100vw"
//           backgroundColor={colorMode === "dark" ? "brand.900" : "brand.100"}
//         >
//           <Box
//             backgroundColor={colorMode === "dark" ? "brand.900" : "brand.100"}
//             p={6}
//             display="flex"
//             justifyContent="space-between"
//           >
//             <Flex>
//               <Image src={flux} alt="FLUX Logo" width="36" height="36" />
//               <Heading
//                 as="h1"
//                 size="lg"
//                 ml={2}
//                 color={colorMode === "dark" ? "white" : "black"}
//               >
//                 flux-api
//               </Heading>
//             </Flex>
//             <IconButton
//               aria-label="Toggle color mode"
//               icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
//               onClick={toggleColorMode}
//               color={colorMode === "dark" ? "white" : "black"}
//             />
//           </Box>
//           <Divider borderColor={colorMode === "dark" ? "white" : "black"} />
//           <Flex direction="column" py={4} flex={1}>
//             <Center py={5}>
//               <Heading
//                 as="h1"
//                 size="3xl"
//                 color={colorMode === "dark" ? "white" : "black"}
//                 mt={6}
//                 mb={3}
//               >
//                 Welcome to
//               </Heading>
//               <Heading
//                 as="h1"
//                 size="3xl"
//                 px={2}
//                 color="brand.200"
//                 mt={6}
//                 mb={3}
//               >
//                 flux
//               </Heading>
//             </Center>
//             <Center>
//               <Text fontWeight="semibold" mb={6}>
//                 Unveil the Details of your transactions within an Instant with
//                 FLUX
//               </Text>
//             </Center>

//             <Center>
//               <Box
//                 backgroundColor={colorMode === "dark" ? "black" : "white"}
//                 borderRadius="2xl"
//                 py={5}
//                 px={5}
//                 borderColor={colorMode === "dark" ? "white" : "black"}
//                 borderWidth={1}
//                 w="50%"
//                 h="100%"
//               >
//                 <FormControl>
//                   <Heading
//                     as="h1"
//                     fontSize={21}
//                     color={colorMode === "dark" ? "white" : "black"}
//                     mb={4}
//                   >
//                     Smart Contract
//                   </Heading>
//                   <FormLabel color={colorMode === "dark" ? "white" : "black"}>
//                     Please provide your contract code.
//                   </FormLabel>
//                 </FormControl>
//                 <Flex>
//                 <Input
//                     placeholder="Enter Code"
//                     value={smartContract}
//                     onChange={(e) => setSmartContract(e.target.value)}
//                     backgroundColor={colorMode === "dark" ? "black" : "white"}
//                     color={colorMode === "dark" ? "white" : "black"}
//                     borderColor={colorMode === "dark" ? "white" : "black"}
//                     borderRadius="lg"
//                     height={200}
//                     mt={6}
//                   />
//                   <Select
//                     placeholder="Chain"
//                     value={txnChain}
//                     onChange={(e) => setTxnChain(e.target.value)}
//                     backgroundColor={colorMode === "dark" ? "black" : "white"}
//                     color={colorMode === "dark" ? "white" : "black"}
//                     borderColor={colorMode === "dark" ? "white" : "black"}
//                     borderRadius="md"
//                     fontSize="md"
//                     w="25%"
//                     mt={6}
//                     ml={3}
//                   >
//                     {chainOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </Select>
//                 </Flex>
//               </Box>
//             </Center>


//             <Center>
//               <Button
//                 backgroundColor={colorMode === "dark" ? "white" : "black"}
//                 color={colorMode === "dark" ? "black" : "white"}
//                 _hover={{ backgroundColor: "brand.200" }}
//                 onClick={handleButtonClick}
//                 w={60}
//                 m={10}
//                 py={5}
//               >
//                 Decode
//               </Button>

//               <Button
//                 backgroundColor={colorMode === "dark" ? "white" : "black"}
//                 color={colorMode === "dark" ? "black" : "white"}
//                 _hover={{ backgroundColor: "brand.200" }}
//                 onClick={handleButtonClick}
//                 w={60}
//                 m={10}
//                 py={5}
//               >
//                 Get Notified
//               </Button>
//             </Center>
//             <Divider borderColor={colorMode === "dark" ? "white" : "black"} />
//             {apiOutput && (
//               <Box
//                 p={4}
//                 borderWidth={1}
//                 borderRadius="lg"
//                 w="98%"
//                 backgroundColor={colorMode === "dark" ? "black" : "white"}
//                 borderColor={colorMode === "dark" ? "white" : "black"}
//                 color={colorMode === "dark" ? "white" : "black"}
//                 m={4}
//               >
//                 <Center>
//                   <Heading
//                     as="h1"
//                     size="lg"
//                     color={colorMode === "dark" ? "white" : "black"}
//                     mb={2}
//                   >
//                     Response
//                   </Heading>
//                 </Center>
//                 <Text>Asset Transferred : {apiOutput.assetTransferred}</Text>
//                 <Text>From : {apiOutput.from}</Text>
//                 <Text>To : {apiOutput.to}</Text>
//                 <Text>Function Signature : {apiOutput.functionSignature}</Text>
//                 <Text>Simplified Message : {apiOutput.simplifiedMessage}</Text>
//                 <Text>Function Info :</Text>
//                 {JSON.stringify(apiOutput.functionInfo, null, 2)}
//               </Box>
//             )}
//             <Center>
//               <Box
//                 backgroundColor={colorMode === "dark" ? "black" : "white"}
//                 borderRadius="xl"
//                 mt={5}
//                 p={2}
//               >
//                 <Flex>
//                   <Image src={bytekodeLogo} alt="bytekode" width="45" />
//                   <Flex direction="column" ml={3}>
//                     <Text fontSize="xs">Powered by</Text>
//                     <Text fontSize="md">BYTEKODE LABS</Text>
//                   </Flex>
//                 </Flex>
//               </Box>
//             </Center>
//           </Flex>
//         </Flex>
//       </ColorModeProvider>
//     </ThemeProvider>
//   );
// };

// export default FluxPage;

import React, { useState } from 'react';

interface Contract {
    deployedAddress: string;
    contractAbi: string;
    deploymentChain: string;
  }
  
  interface AddContractProps {
    onContractAdded: (contract: Contract) => void;
  }
  

const NAV_ITEMS = ['Add Contract', 'My Contracts', 'Decode', 'Get notifs'];

function AddContract({ onContractAdded }: AddContractProps) {
    const [deployedAddress, setDeployedAddress] = useState('');
    const [contractAbi, setContractAbi] = useState('');
    const [deploymentChain, setDeploymentChain] = useState('');
  
    const handleClick = () => {
      const contract: Contract = { deployedAddress, contractAbi, deploymentChain };
      onContractAdded(contract);
      setDeployedAddress('');
      setContractAbi('');
      setDeploymentChain('');
    };

    return (
        <div>
          <input type="text" placeholder="Deployed Address" onChange={e => setDeployedAddress(e.target.value)} />
          <input type="text" placeholder="Contract ABI" onChange={e => setContractAbi(e.target.value)} />
          <input type="text" placeholder="Deployment Chain" onChange={e => setDeploymentChain(e.target.value)} />
          <button onClick={handleClick}>Add</button>
        </div>
      );
    }

function App() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [contracts, setContracts] = useState<Contract[]>([]);

  const handleContractAdded = (contract: Contract) => {
    setContracts([...contracts, contract]);
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'Add Contract':
        return <AddContract onContractAdded={handleContractAdded} />;
      case 'My Contracts':
        return (
          <div>
            {contracts.map((contract, index) => (
              <div key={index}>
                <p>Deployed Address: {contract.deployedAddress}</p>
                <p>Contract ABI: {contract.contractAbi}</p>
                <p>Deployment Chain: {contract.deploymentChain}</p>
              </div>
            ))}
          </div>
        );
      // ... other cases for 'Decode', 'Get notifs', etc.
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1em', borderBottom: '1px solid black' }}>
        <div>Bytekode</div>
        <button onClick={() => setActiveItem('Add Wallet')}>Add Wallet</button>
      </nav>

      <div style={{ display: 'flex', height: '100%' }}>
        <aside style={{ borderRight: '1px solid black', width: '200px', padding: '1em' }}>
          {NAV_ITEMS.map(item => (
            <button key={item} onClick={() => setActiveItem(item)} style={{ display: 'block', marginBottom: '1em' }}>
              {item}
            </button>
          ))}
        </aside>

        <main style={{ flex: 1, padding: '1em' }}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
