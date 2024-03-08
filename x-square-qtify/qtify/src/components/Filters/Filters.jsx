import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import Tabs from "@mui/material/Tabs";

import styles from "./Filters.module.css";
import Typography from "@mui/material/Typography";

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}>
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {
   const handleChange = (event, newValue) => {
      setSelectedFilterIndex(newValue);
   };

   function a11yProps(index) {
      return {
         id: `simple-tab-${index}`,
         "aria-controls": `simple-tabpanel-${index}`,
      };
   }

   return (
      <div>
         <Tabs
            onChange={handleChange}
            value={selectedFilterIndex}
            TabIndicatorProps={{
               style: {
                  backgroundColor: `var(--color-primary)`,
               },
            }}
            aria-label="lab API tabs example">
            {filters.map((ele, idx) => (
               <Tab className={styles.tab} label={ele.label} {...a11yProps(idx)} />
            ))}
         </Tabs>
         {filters.map((ele, idx) => (
            <TabPanel value={ele.label} index={idx} />
         ))}
      </div>
   );
}

export default Filters;
