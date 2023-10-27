import { Brand, PageContainer } from "@/ui";

export const Header: React.FC = () => {
  return (
    <PageContainer>
      <header className="h-[9rem] flex flex-row items-center justify-start px-16">
        {/* BRAND */}
        <Brand />
        {/* NAV */}

        {/* LANG */}
      </header>
    </PageContainer>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      <PageContainer className="p-16 flex flex-col">
        <div className="flex flex-row">
          <Brand />
        </div>
        <div className="mt-16 h-8 border-t border-t-slate-500"></div>
      </PageContainer>
    </footer>
  );
}