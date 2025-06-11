import React from 'react';
import { Link } from 'react-router-dom';
import { JobApplication } from '../types/job';
import { ApplicationStatus } from './ApplicationStatus';

interface ApplicationListProps {
  applications: JobApplication[];
  onWithdraw: (applicationId: string) => void;
}

export const ApplicationList: React.FC<ApplicationListProps> = ({
  applications,
  onWithdraw,
}) => {
  if (applications.length === 0) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center text-gray-500">
          暂无申请记录
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="divide-y divide-gray-200">
        {applications.map((application) => (
          <div
            key={application.id}
            className="p-6 hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1 min-w-0">
                <Link
                  to={`/applications/${application.id}`}
                  className="text-lg font-medium text-blue-600 hover:text-blue-800 truncate"
                >
                  {application.job.title}
                </Link>
                <p className="mt-1 text-sm text-gray-500">
                  {application.job.company}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {application.job.industry}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {application.job.location}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {application.job.employmentType}
                  </span>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 flex flex-col items-end">
                <ApplicationStatus
                  application={application}
                  onWithdraw={onWithdraw}
                />
                <div className="mt-2 text-sm text-gray-500">
                  申请时间：{new Date(application.appliedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            {application.notes && (
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium">备注：</p>
                <p className="mt-1">{application.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 