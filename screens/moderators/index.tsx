"use client";

import Image from "next/image";
import React, { useState } from "react";
import { moderators } from "../../data/moderator";

export const Moderators = () => {
  const [list, setList] = useState(moderators);

  const removeMember = (id: number) => {
    setList(list.filter((m) => m.id !== id));
  };

  return (
    <div className="w-[calc(1492px-232px)] overflow-auto">
      <div className="h-[80px] mx-auto px-4 w-full mb-3 bg-white rounded-[30px] flex justify-between gap-2 items-center">
        <p className="font-[600] text-[16px]">Moderators</p>
        <button className="cursor-pointer flex gap-2 rounded-[50px] max-w-[182px] w-full h-[40px] md:h-[50px] justify-center items-center bg-gradient-to-r from-[#4285F4] to-[#D209A3] text-white">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9H14M9.5 13.5V4.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-[600] text-xs md:text-[14px]">Add members</p>
        </button>
      </div>

      <div className="mx-auto p-4 w-full mb-3 bg-white rounded-[30px] flex flex-col">
        <p className="font-[600] text-[14px] mb-4 tracking-[0%]">
          Manage all members
        </p>

        <div className="overflow-x-auto w-auto">
          {/* Header - Only visible on desktop */}
          <div className="hidden w-fit lg:flex items-center px-[25px] mb-3 py-[12px] h-[51px] border-b border-[#F8F8F8] rounded-[20px]">
            <div className="min-w-[470px]">
              <p className="text-[#454545] font-[600] text-xs">Data</p>
            </div>
            <div className="flex items-center gap-6 min-w-[460px]">
              <p className="text-[#454545] min-w-[100px] font-[600] text-center text-xs">
                Tag
              </p>
              <p className="text-[#454545] min-w-[120px] text-center font-[600] text-xs">
                Data
              </p>
              <p className="text-[#454545] min-w-[120px] text-center font-[600] text-xs">
                Data
              </p>
              <p className="text-[#454545] min-w-[120px] text-center font-[600] text-xs">
                Data
              </p>
            </div>
            <div className="min-w-[100px] ml-auto flex items-end justify-end">
              <p className="text-[#454545] font-[600] text-end text-xs mr-[-20px]">
                Action
              </p>
            </div>
          </div>

          {/* Data Rows - Responsive Layout */}
          <div className="flex flex-col gap-3 w-full">
            {list?.length > 0 ? (
              <>
                {list.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col w-fit sm:flex-row lg:flex-row lg:items-center gap-4 rounded-[20px] py-4 px-4 min-h-[110px] border-[#F3F3F3] border"
                  >
                    {/* Member Info Section */}
                    <div className="flex items-center gap-3 lg:gap-4 flex-1 lg:min-w-[470px] lg:flex-initial">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={80}
                        height={80}
                        className=" rounded-[20px] lg:rounded-[25px] object-cover flex-shrink-0"
                      />

                      <div className="min-w-0 flex-1 lg:flex lg:items-center lg:gap-3">
                        <div className="flex flex-col gap-1 lg:w-[98px] lg:flex-shrink-0">
                          <p className="font-[600] text-[13px] lg:truncate">
                            {member.name}
                          </p>
                          <p className="text-xs font-[600] text-[#454545] lg:truncate">
                            {member.username}
                          </p>
                          <p className="text-xs font-[600] text-[#7B7B7B] lg:truncate">
                            {member.location}
                          </p>
                        </div>
                        <p className="mt-2 lg:mt-0 lg:w-[200px] leading-[18px] lg:leading-[20px] font-[400] text-xs text-[#212121] line-clamp-3">
                          {member.bio}
                        </p>
                      </div>
                    </div>

                    {/* Data and Action Section */}
                    <div className="flex justify-between sm:flex-row sm:items-center lg:items-center gap-3 sm:gap-4 lg:gap-6 lg:w-[546px]">
                      {/* Tag and Data Container */}
                      <div className="flex items-center justify-between sm:flex-row sm:items-center lg:gap-6 lg:w-[460px] flex-1 lg:flex-initial">
                        {/* Tag */}
                        <div className="lg:min-w-[100px] lg:flex lg:justify-center sm:mr-3 lg;mr-0">
                          <span className="h-[28px] lg:h-[30px] px-3 lg:px-3 w-[70px] lg:w-full flex items-center justify-center rounded-[20px] text-xs font-[600] text-[#454545] bg-gradient-to-r from-[rgba(210,9,163,0.1)] to-[rgba(66,133,244,0.1)]">
                            {member.tag}
                          </span>
                        </div>

                        {/* Data Values - Mobile: horizontal, Desktop: individual columns */}
                        <div className="flex items-center gap-4 sm:gap-4 lg:contents">
                          <div className="lg:min-w-[120px] lg:flex lg:items-center lg:justify-center">
                            <span className="text-xs font-[600] text-[#454545]">
                              {member.data1}
                            </span>
                          </div>
                          <div className="lg:min-w-[120px] lg:flex lg:items-center lg:justify-center">
                            <span className="text-xs font-[600] text-[#454545]">
                              {member.data2.toLocaleString()}
                            </span>
                          </div>
                          <div className="lg:min-w-[120px] lg:flex lg:items-center lg:justify-center">
                            <span
                              className={`${
                                member.data3 === "High"
                                  ? "text-green-600"
                                  : member.data3 === "Medium"
                                  ? "text-yellow-600"
                                  : "text-red-600"
                              } text-xs font-[600]`}
                            >
                              {member.data3}
                            </span>
                          </div>
                          <button
                            onClick={() => removeMember(member.id)}
                            className="self-end sm:hidden ml-auto sm:self-center p-2 hover:bg-[#F8F8F8] flex justify-center items-center rounded-[50px] cursor-pointer h-[40px] w-[40px] transition-colors"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.75 4.485C13.2525 4.2375 10.74 4.11 8.235 4.11C6.75 4.11 5.265 4.185 3.78 4.335L2.25 4.485M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275M14.1375 6.855L13.65 14.4075C13.5675 15.585 13.5 16.5 11.4075 16.5H6.5925C4.5 16.5 4.4325 15.585 4.35 14.4075L3.8625 6.855M7.7475 12.375H10.245M7.125 9.375H10.875"
                                stroke="#212121"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Action Button */}
                    <div className="min-w-[100px] ml-auto items-end justify-end hidden sm:flex">
                      <button
                        onClick={() => removeMember(member.id)}
                        className="self-end ml-auto sm:self-center p-2 hover:bg-[#F8F8F8] flex justify-center items-center rounded-[50px] cursor-pointer h-[40px] w-[40px] transition-colors"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.75 4.485C13.2525 4.2375 10.74 4.11 8.235 4.11C6.75 4.11 5.265 4.185 3.78 4.335L2.25 4.485M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275M14.1375 6.855L13.65 14.4075C13.5675 15.585 13.5 16.5 11.4075 16.5H6.5925C4.5 16.5 4.4325 15.585 4.35 14.4075L3.8625 6.855M7.7475 12.375H10.245M7.125 9.375H10.875"
                            stroke="#212121"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p className="text-center text-sm py-5">No data found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
