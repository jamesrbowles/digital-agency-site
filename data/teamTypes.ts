interface TeamMember {
  id: number;
  img: string;
  socialList: { icon: React.ReactNode; liveLink: string }[];
  name: string;
  type: string;
  office: string;
  mobile: string;
  email: string;
}

export default TeamMember;
