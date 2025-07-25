# Stage 1: Build the application using the .NET SDK image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
ENV ASPNETCORE_ENVIRONMENT=Development
WORKDIR /src

# Copy the .csproj file and restore dependencies
COPY ["spgct.csproj", "./"]
RUN dotnet restore "./spgct.csproj"

# Copy the remaining files for the build process
COPY . .

# Run the dotnet publish command as requested
RUN dotnet publish spgct.csproj -c Release -o out

# Build and publish the application in one step
RUN dotnet publish "./spgct.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Stage 2: Create a lightweight image for the application runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
EXPOSE 8080
#EXPOSE 8081


# Copy the published output from the build stage
COPY --from=build /app/publish .

# Set the entry point to run the application
ENTRYPOINT ["dotnet", "spgct.dll","--environment=Development"]

#docker build -t apispgct:latest .
#docker run -d -p 8081:8080 --name apiuserspgct-container apiuserspgct:latest

