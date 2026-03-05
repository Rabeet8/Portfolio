import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ScrollShowcase() {
  return (
    <div className="flex flex-col overflow-hidden bg-background">
      <ContainerScroll
        titleComponent={
          <div>
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              Unleash the power of
            </p>
            <h2 className="text-4xl md:text-7xl font-bold text-foreground">
              Scroll Animations
            </h2>
          </div>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
          alt="Dashboard showcase"
          className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
