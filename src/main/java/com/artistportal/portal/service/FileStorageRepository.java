package com.artistportal.portal.service;

import com.artistportal.portal.model.FileStorageProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.nio.file.Path;

public interface FileStorageRepository extends JpaRepository<FileStorageProperties, Long> {

    FileStorageProperties getFileStoragePropertiesByUserId(Long userId, String fileType);

    FileStorageProperties getFileStoragePropertiesByFileNameAndFileType(Long userId, String documentId);



}
