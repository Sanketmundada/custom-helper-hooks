import { useEffect } from 'react';

/**
 *
 * @param className Class name provided to image tags which are to be loaded lazily
 * @description You need to provide URLs for the images (to be loaded lazily) in the data-src attribute
 */
const useLazyLoad = (className: string) => {
  useEffect(() => {
    const images: NodeListOf<HTMLImageElement> = document.querySelectorAll(
      `.${className}`
    );

    if (window.IntersectionObserver) {
      // If browser has intersection observer
      const imageObserver = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            if (image.dataset.src) {
              image.src = image.dataset.src;
            }
            image.classList.remove(className);
            imageObserver.unobserve(image);
          }
        });
      });
      images.forEach((img) => {
        imageObserver.observe(img);
      });
      return () => {
        images.forEach((img) => {
          imageObserver.unobserve(img);
        });
      };
    } else {
      // Browser does not have Intersection observer so use custom lazy loading logic
      let throttleTimeout: any;

      const lazyLoad = () => {
        if (throttleTimeout) clearTimeout(throttleTimeout);

        throttleTimeout = setTimeout(() => {
          const scrollTop = window.pageYOffset;

          images.forEach((img) => {
            console.log(img.offsetTop, window.innerHeight + scrollTop);
            if (img.offsetTop < window.innerHeight + scrollTop) {
              img.src = img.dataset.src;
              img.classList.remove(className);
            }
          });

          if (images.length == 0) {
            document.removeEventListener('scroll', lazyLoad);
            window.removeEventListener('resize', lazyLoad);
            window.removeEventListener('orientationChange', lazyLoad);
          }
        }, 50);
      };

      document.addEventListener('scroll', lazyLoad);
      window.addEventListener('resize', lazyLoad);
      window.addEventListener('orientationChange', lazyLoad);

      return () => {
        document.removeEventListener('scroll', lazyLoad);
        window.removeEventListener('resize', lazyLoad);
        window.removeEventListener('orientationChange', lazyLoad);
      };
    }
  }, []);
};

export default useLazyLoad;
