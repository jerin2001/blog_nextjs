import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import supabaseURLKEY from "@/supabaseURLKEY";
import NoItems from "@/components/NoItems";
import Loader from "@/Layouts/loader";
import UserCardLayout from "@/components-user/UserCardLayout";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from "react-time-ago";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";


TimeAgo.addDefaultLocale(en)


function UserPage() {
  const router =useRouter()
const dispatch =useDispatch()

const navigator =()=>{
    router.push('/usercardpage')
    
  }
    const [isLoading, setisLoading] = useState(false);
  //get blogdatas
  const [blogDatas, setBlogDatas] = useState([]);

  const getBlogDatas = async () => {
    setisLoading(true);
    const { data, error } = await supabaseURLKEY.from("blogdatas").select();
    if (data) {
      setBlogDatas(data);
    } else {
      console.log(error);
    }
    setisLoading(false);
    
  };
  useEffect(() => {
    getBlogDatas();
  }, []);

  return (
    <>
    {isLoading && <Loader/>}
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,

    }}
    flex={4}
  >
    <Box width="100%"></Box>
    {blogDatas.length > 0 ? (
      blogDatas.map((blogData) => {
        const {
            blog_title,
            blog_description,
            blog_author,
            blog_category,
            created_at
          } = blogData;
        return (
          <>
            <UserCardLayout
               navigator={navigator}
             > <Typography color='grey' fontSize='small'>
              <ReactTimeAgo date={created_at}/>
              </Typography>
                    <Typography variant="h5" component="div">
            {blog_title || ''}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {blog_author}
          </Typography>
          <Typography variant="body2">{blog_category || ''}</Typography>
          <Typography variant="body2">{blog_description || ''}</Typography>
             </UserCardLayout>
            
            
          </>
        );
      })
    ) : (
      <NoItems />
    )}
  </Box>
  </>
  )
}

export default UserPage;