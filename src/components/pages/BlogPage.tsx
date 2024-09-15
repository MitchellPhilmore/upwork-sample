/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import BlogPost from "../../components/BlogPost";
import PopularPosts from "../../components/PopularPosts";
import Categories from "../../components/Categories";
import AppointmentSteps from "../../components/AppointmentSteps";
import "../../app/globals.css";

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <BlogPost
            title="Why Regular Check-Ups Matter"
            author="John Doe"
            category="Men's Health"
            date="MAY 24, 2024"
            content={
              <>
                <p className="font-medium max-md:max-w-full">
                  Regular check-ups are a cornerstone of maintaining good health
                  and preventing serious conditions, yet many men neglect them
                  until issues become severe. Understanding the value of routine
                  health visits can make a significant difference in long-term
                  well-being.
                </p>
                <h2 className="self-start mt-6 text-lg leading-none">
                  1. Early Detection of Health Issues
                </h2>
                <p className="mt-4 max-md:max-w-full">
                  Routine check-ups allow healthcare providers to monitor vital
                  signs and perform screenings that can detect health issues
                  before they become problematic. Conditions like high blood
                  pressure, diabetes, and high cholesterol often develop
                  silently, and regular check-ups can identify these issues
                  early. Early detection allows for timely intervention and
                  treatment, which can prevent complications and improve
                  outcomes.
                </p>
              </>
            }
          />
        </div>
        <div className="lg:w-1/3">
          <PopularPosts />
          <Categories />
        </div>
      </div>
      <AppointmentSteps />
    </Layout>
  );
};

export default BlogPage;
