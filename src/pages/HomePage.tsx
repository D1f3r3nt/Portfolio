import { Page } from "../components/organisms/Page.tsx";
import { Text } from "../components/atoms/Text.tsx";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import profile from "../assets/profilePhoto.jpg";
import dataES from "../data/es/how_i_am.json";
import {GoldButton} from "../components/molecules/GoldButton.tsx";

export const HomePage = () => {
  return (
      <Page>
          <div className='grid grid-cols-3'>
              <div className='col-span-2'>
                  <Text value='¿Quién soy?' size='xl' gradient/>
                  <Text value={dataES.name} size="l" className='mt-3'/>
                  <Text value={dataES.description} size="m" className='mt-1 text-justify'/>
              </div>

              <div className="flex flex-col items-center">
                  <img src={profile} alt="Imagen" className="w-[350px] h-[350px] gold-gradient-border-3"/>

                  <div className="flex flex-row mt-8 w-[400px] justify-around">
                      <GoldButton onClick={() => {}}> <LinkedInIcon /> </GoldButton>
                      <GoldButton onClick={() => {}}> <LinkedInIcon className="gold-gradient"/> </GoldButton>
                      <GoldButton onClick={() => {}}> <GitHubIcon className="gold-gradient"/> </GoldButton>
                      <GoldButton onClick={() => {}}> <DownloadIcon className="gold-gradient"/> </GoldButton>
                  </div>
              </div>
          </div>
      </Page>
  )
}