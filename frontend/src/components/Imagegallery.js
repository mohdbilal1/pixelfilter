
import { Box, Card, CardActionArea, CardMedia } from '@mui/material'
import { MenuList } from '../api/images'

function Menu() {
  return (
    <>
    
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map((menu, i) => {
          return (
            <Card key={i} sx={{ width: '200px', m: 2 }}>
              <CardActionArea>
                <CardMedia
                  src={menu.image}
                  component={'img'}
                  sx={{ height: '150px' }}
                />
              </CardActionArea>
              
            </Card>
          )
        })}
      </Box>
    </>
  )
}

export default Menu