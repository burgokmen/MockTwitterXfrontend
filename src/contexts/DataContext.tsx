import { Dispatch, SetStateAction, createContext, useState } from "react";

export type Profile = {
  id: number;
  userHandle: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cellular: string;
  birthday: Date;
  location: string;
  profilePicture: string;
  profileWallpaper: string;
  createdAt: string;
};

export interface ProfileContextInterface {
  profile: Profile;
  setProfile: Dispatch<SetStateAction<Profile>>;
}

const defaultProfile = {
  profile: {
    id: 0,
    userHandle: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cellular: "",
    birthday: "01-01-2000" as unknown as Date,
    location: "",
    profilePicture: "",
    profileWallpaper: "",
    createdAt: "",
  },
  setProfile: (profile: Profile) => {},
} as ProfileContextInterface;

export const ProfileContext = createContext(defaultProfile);

type ProfileProviderProps = {
  children: React.ReactNode;
};

export default function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<Profile>(defaultProfile.profile);
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
