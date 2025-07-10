import { useFetchProfile } from "../../hooks/useFetchProflie"

type Contact = {
  email: string;
  github: string;
  linkedin: string;
};

type ProfileData = {
  summary: string;
  contact: Contact;
};

export const ProfileSummary = () => {
  const {profile} = useFetchProfile() as { profile: ProfileData[] };

  return (
    <div className="col-start-2 col-end-5 ">
      {profile?.map((data)=>{
        return (
        <div>
          <p className="border-y-2 border-zinc-500 py-4 mb-4">{data.summary}</p>
          <div className="text-zinc-500">
            <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a> <br />
            <a href={data.contact.github}>Github</a><br/>
            <a href={data.contact.linkedin}>Linkedin</a>
          </div>
        </div>
        )
      })}
    </div>
  )
}