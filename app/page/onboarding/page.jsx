"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/app/components/Loader";
import { useAuthStore } from "@/app/store/Auth";
import RentImage from "@/public/assets/rent.png";
import styles from "@/app/style/onboarding.module.css";
import DeliveryImage from "@/public/assets/delivery.png";
import BusinessImage from "@/public/assets/business.png";

export default function OnboardingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { isAuth, toggleAuth } = useAuthStore();
  const router = useRouter();

  const openMore = () => {
    router.push("/authentication/login");
  };

  const business = () => {
    if(isAuth) {
      router.push("join", { scroll: false });

    } else {
      router.push("/authentication/login", { scroll: false });

    }
  };

  const rent = () => {
    if(isAuth) {
      router.push("join", { scroll: false });

    } else {
      router.push("/authentication/login", { scroll: false });

    }
  };

  const delivery = () => {
    if(isAuth) {
      router.push("join", { scroll: false });

    } else {
      router.push("/authentication/login", { scroll: false });

    }
  };

  return (
    <div className={styles.onboardingContainer}>
      <div className={styles.onboardingTop}>
        <h4>Onboarding</h4>
        <h1>Choose the work you wanna do to get started</h1>
        <p>After you choose, follow the steps to get onboarded and with us</p>
      </div>
      <div className={styles.onboardingImageContainer}>
        <div className={styles.onboardingBusiness}>
        <button onClick={business} className={styles.btnOnboardingBusiness}>
            Onboard your business
          </button>
          {isLoading && <Loader />}
          <Image
            className={styles.onboardingImage}
            src={BusinessImage}
            alt="Business image"
            height={260}
            priority
          />

        </div>
        <div className={styles.onboardingBusiness}>
          <Image
            className={styles.onboardingRentImage}
            src={RentImage}
            alt="Rent/Sell image"
            height={500}
            priority
          />
          <button onClick={rent} className={styles.btnOnboardingRent}>
            Rent or sell your House/car
          </button>
          {isLoading && <Loader />}
        </div>
        <div className={styles.onboardingBusiness}>
          <Image
            className={styles.onboardingImage}
            src={DeliveryImage}
            alt="Delivery image"
            height={260}
            priority
          />
          <button onClick={delivery} className={styles.btnOnboardingDelivery}>
            Be a delivery driver
          </button>
          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
}
