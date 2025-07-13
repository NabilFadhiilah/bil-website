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
    <div className="lg:col-start-2 lg:col-end-5 md:col-start-1 md:col-end-4 sm:col-start-1 sm:col-end-4">
      {profile?.map((data, idx)=>{
        return (
        <div key={idx}>
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