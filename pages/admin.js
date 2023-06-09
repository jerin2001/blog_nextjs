import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Homepage from "./homepage";
import Container from "@mui/material/Container";
import Auth from "@/components-user/Auth";




function Admin() {
    const session = useSession();
    const supabase = useSupabaseClient();
    return (
      <>
        {!session ? (
          <>
        
          <Container
            maxWidth="el"
            sx={{
              backgroundColor: "lavender",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
             height:'100vh',
              width: "100%",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 450,
                gap: "10px",
                flexDirection: "column",
                border: "2px solid red",
                height: 500,
                borderRadius: "40px",
                boxShadow: "1px 0px 10px black",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
  
                  gap: "10px",
                  flexDirection: "column",
                  width: "95%",
                }}
              >
                <Stack alignItems="center" justifyContent="center">
                  <Typography variant="h4" fontWeight="bold" color="black">
                    Welcome To Blog
                  </Typography>
                </Stack>
                <Auth/>
              </Box>
            </Box>
          </Container>
          </>
        ) : (
          <>
            <Homepage/>
          </>
        )}
      </>
    );
}

export default Admin