//built in modules
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
`;

const HeroSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #34495e;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #34495e;
  line-height: 1.8;
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
`;

const FeaturesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FeatureItem = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #34495e;
  line-height: 1.6;
`;

const GetStartedButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const HomePageView = () => {
  const history = useHistory();

  return (
    <Container>
      <HeroSection>
        <Title>Welcome to Smart Farming</Title>
        <Subtitle>
          Empower your agricultural journey with AI-powered tools and insights
          designed to optimize your farming operations.
        </Subtitle>
        <Description>
          Our intelligent crop recommendation system helps farmers make data-driven decisions about what to plant. 
          Using advanced machine learning models, we analyze multiple factors to provide accurate crop recommendations 
          and yield estimations tailored to your specific conditions.
        </Description>
        <GetStartedButton onClick={() => history.push('/CropRecommendation')}>
          Get Started
        </GetStartedButton>
      </HeroSection>

      <FeaturesSection>
        <FeatureItem>
          <FeatureTitle>🌍 Smart Location Analysis</FeatureTitle>
          <FeatureDescription>
            We automatically fetch and analyze weather data for your location to ensure recommendations are perfectly tailored to your local climate conditions.
          </FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>🧪 Soil Analysis</FeatureTitle>
          <FeatureDescription>
            Input your soil's NPK values or let our system predict them. Our advanced model considers soil composition to recommend the most suitable crops.
          </FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>🌱 Crop Prediction</FeatureTitle>
          <FeatureDescription>
            Our sophisticated prediction model combines weather data, soil conditions, and historical patterns to suggest the best crops for your farm.
          </FeatureDescription>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>📊 Yield Estimation</FeatureTitle>
          <FeatureDescription>
            Get detailed yield estimations for recommended crops, helping you make informed decisions about crop selection and resource allocation.
          </FeatureDescription>
        </FeatureItem>
      </FeaturesSection>
    </Container>
  );
};

export default HomePageView;
