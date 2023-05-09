import React from 'react';
import { Job } from '../Job/Job';
import { useNavigate } from 'react-router-dom';
import { Empty, EmptyButtonType } from '../Empty/Empty';

type JobsListType = {
  jobs: JobType[];
  count?: number;
};

export const JobsList: React.FC<JobsListType> = ({ jobs }) => {
  const navigate = useNavigate();

  const onJobHandleClick = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <>
      {jobs.map((job) => {
        return <Job key={job.id} {...job} handleClick={() => onJobHandleClick(job.id)} />;
      })}
    </>
  );
};

type JobsListHOCType = {
  button?: EmptyButtonType;
  jobs: JobType[];
};
export const JobsListHOC: React.FC<JobsListHOCType> = ({ jobs, button }) => {
  return <>{jobs.length ? <JobsList jobs={jobs} /> : <Empty button={button} />}</>;
};
