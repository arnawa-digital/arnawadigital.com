"use client";

import { useState } from "react";
import { collections_content } from "@/common";
import PageContainer from "@/components/elements/page-container";
import Maintenance from "@/components/elements/maintenance";
import * as FadeIn from "@/components/elements/motion";
import TemplateCard from "@/components/elements/template-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const CollectionsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(collections_content.length / itemsPerPage);

  const currentItems = collections_content.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      scrollToTop();
    }
  };

  return (
    <PageContainer className="min-h-screen pb-24 pt-6">
      <FadeIn.Container>
        <FadeIn.Item>
          <Maintenance />
        </FadeIn.Item>
        <FadeIn.Item>
          <div className="mb-4 flex flex-col items-center justify-between text-center">
            <h1 className="text-2xl font-semibold">Our Magic Collections</h1>
            <h3 className="mt-1 max-w-80 text-base italic text-gray-800 md:text-lg">
              Discover the magical collection of ready-to-launch templates, perfect for bringing
              your vision to life in no time!
            </h3>
          </div>
        </FadeIn.Item>
        <div className="mb-6 mt-12 grid grid-cols-1 gap-8 px-5 md:grid-cols-2 md:px-24">
          {currentItems.map((item, index) => (
            <FadeIn.Item key={index}>
              <TemplateCard
                title={item.title}
                desc={item.desc}
                purchase_number={item.purchase_number}
                imageSrc={`${item.assetsImage[0]}`}
                href=""
                altText={item.title}
                className=""
              />
            </FadeIn.Item>
          ))}
        </div>
        <FadeIn.Item>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  aria-disabled={currentPage === 1}
                  tabIndex={currentPage === 1 ? -1 : undefined}
                  className={cn(
                    "cursor-pointer",
                    currentPage === 1 ? "pointer-events-none cursor-pointer opacity-50" : undefined,
                  )}
                  onClick={() => handlePageChange(currentPage - 1)}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    className="cursor-pointer"
                    onClick={() => handlePageChange(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  aria-disabled={currentPage === totalPages}
                  tabIndex={currentPage === totalPages ? -1 : undefined}
                  className={cn(
                    "cursor-pointer",
                    currentPage === totalPages ? "pointer-events-none opacity-50" : undefined,
                  )}
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </FadeIn.Item>
      </FadeIn.Container>
    </PageContainer>
  );
};

export default CollectionsPage;
