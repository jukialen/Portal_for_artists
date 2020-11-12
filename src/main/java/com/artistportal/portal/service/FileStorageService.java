package com.artistportal.portal.service;

import antlr.StringUtils;
import com.artistportal.portal.exception.FileStorageException;
import com.artistportal.portal.model.FileStorageProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileStorageService {

    private final Path fileLocation;

    @Autowired
    FileStorageRepository fileStorageRepository;

    public FileStorageService(FileStorageProperties fileStorageProperties) {
        this.fileLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.fileLocation);
        } catch(Exception e){
            throw new FileStorageException("Could not create direcotry", e);
        }
    }

    public String storeFile(MultipartFile multipartFile, Long userId, String fileType){
        String originalFileName = multipartFile.getOriginalFilename();
        String filename = "";
        try {
            if (originalFileName.contains("..")){
                throw new FileStorageException("Filename contains invalid path sequence" + originalFileName);
            }
            String fileExtension = "";
            try {
                fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
            } catch (Exception e) {
                fileExtension = "";
            }
            filename = userId + "_" + fileType + fileExtension;
            Path targetLocation = this.fileLocation.resolve(filename);
            Files.copy(multipartFile.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            FileStorageProperties fileInfoRepo = fileStorageRepository.getFileStoragePropertiesByUserId(userId, fileType);

            if(fileInfoRepo != null) {
                ///add there file prop
            }
        }
    }
}
